import React, { useEffect } from "react"
import { useHistory } from "react-router"
import useExitPrompt from '../../../hooks/useExitPrompt/useExitPrompt.js'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import useGroceries from "../../../context/GroceriesContext/GroceriesContext";
import useNotification from "../../../context/NotificationContext/NotificationContext.js";
import formatGroceryObj from "../../../modules/formatGroceryObj"
import useStyles from "./styles"

const Import = () => {
  const classes = useStyles()
  const history = useHistory()
  const [, setShowExitPrompt] = useExitPrompt(false);

  const { createGroceryItem } = useGroceries()
  const { setCurrentNotification } = useNotification()

  useEffect(() => {
    return () => {
      setShowExitPrompt(false)
    }
  }, [setShowExitPrompt])

  const importData = async ({ target }) => {
    setShowExitPrompt(true)
    var fr = new FileReader()

    fr.readAsText(target.files[0])

    fr.onload = await function () {
      let storageAccessed
      try {
        storageAccessed = JSON.parse(fr.result)
      } catch {
        const importMessage = {
          name: "Invalid File!",
          message: `please select a valid .txt file`,
        }
        setCurrentNotification(importMessage)
        setShowExitPrompt(false)
        return
      }

      storageAccessed.forEach((grocery) => {
        const filteredObj = formatGroceryObj(grocery)

        setTimeout(() => {
          createGroceryItem(filteredObj)
        }, 130)
      })

      setShowExitPrompt(false)
      history.push("/")
    }
  }

  return (
    <div className={classes.importDiv}>
      <CloudDownloadIcon className={classes.importIcon} />
      <label className={classes.inputLabel}>
        Import Backup File
      </label>
      <br />
      <input
        className={classes.fileInput}
        onChange={importData}
        type="file"
        name="inputfile"
        id="inputfile"
      ></input>
    </div>
  )
}

export default Import
