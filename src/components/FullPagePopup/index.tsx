import {
  faBook,
  faCircleXmark,
  faClipboardQuestion,
  faInfoCircle,
  faList,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FullPagePopupContainer } from './styles'
import styles from './FullPagePopup.module.css'
import { GithubLogo } from 'phosphor-react'

interface FullPagePopupProps {
  setShowPopup: any
  setShowTutorial: any
}

export function FullPagePopup({
  setShowPopup,
  setShowTutorial,
}: FullPagePopupProps) {
  function handleClose() {
    setShowPopup(false)
  }

  function handleTutorial() {
    setShowPopup(false)
    setShowTutorial(true)
  }
  return (
    <FullPagePopupContainer>
      <div
        className="p-5 text-center lg:w-[60%] md:w-[60%] xl:w-[50%] 2xl:w-[40%]"
        onClick={handleClose}
      >
        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClose} />
        <div></div>
        <h2 className="text-center font-bold pb-3 capitalize text-4xl"></h2>
        <div className="p-4">
          <p className="text-center font-bold text-2xl"></p>
        </div>
        <div className="p-2">
          <p className="text-justify font-bold text-lg"></p>
          <p className="text-center font-bold text-xl pt-5"></p>
        </div>
        <div className="p-2 lg:px-32 px-24  flex justify-center items-center"></div>
        {/* <div className="p-4">
          <div className="grid grid-cols-2 gap-5">
            <div
              onClick={handleClose}
              className="p-4 cursor-pointer bg-yellow-500 rounded-xl"
            >
              <p className="text-center font-bold text-xl">MAP VIEWER</p>
            </div>
            <a
              href=""
              target="_blank"
              className="p-4 cursor-pointer bg-yellow-500 rounded-xl"
            >
              <p className="text-center text-xl font-bold">
                Decision Making Tool
              </p>
            </a>
          </div>
        </div> */}
        <div className="p-2">
          <div className="grid grid-cols-4 gap-1"></div>
        </div>
      </div>
    </FullPagePopupContainer>
  )
}
