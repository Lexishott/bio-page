import {
  faCode,
  faGem,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons'
import GlowingIcon from './GlowingIcon'
import Typewriter from './TypeWriter'
import SparklyText from './SparklyText'

export default function Profile() {
  const typewriterWords = ['I have a', 'Loving wife', 'I love her so much.']
  const typewriterSpeed = 150

  return (
    <>
      <div className="flex flex-col backdrop-blur-xl p-16 rounded-xl w-fit space-y-8">
        <div className="flex flex-row items-center gap-8">
          <img
            src="/favprofile.jpg"
            alt="profile image"
            className="rounded-full w-32 select-none"
          />
          <div className="flex flex-col">
            <div className="flex flex-row space-x-2 justify-center items-center">
              <SparklyText
                value="x.nabid"
                classnames="text-4xl"
              ></SparklyText>
              <GlowingIcon icon={faGem} />
            </div>
            <span className="text-2xl">
              <Typewriter speed={typewriterSpeed} words={typewriterWords} />
            </span>
            <p className="opacity-80">guns.lol/x.nabid</p>
          </div>
        </div>
        <div className="w-full py-1 rounded-full bg-black opacity-25" />
        <div className="flex flex-row space-x-4 text-lg justify-center items-center w-full">
          <GlowingIcon
            link=""
            icon={faShieldHalved}
            tooltip="Discord"
          />
          <GlowingIcon
            link=""
            icon={faCode}
            tooltip="Roblox"
          />
        </div>
      </div>
    </>
  )
}
