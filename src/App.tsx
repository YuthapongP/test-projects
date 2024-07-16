import { useRef, lazy, useState, Suspense, useEffect, useContext } from "react";
import "./i18n";
import { SwiperSlide } from "swiper/react";
import LuckyAlphabet from "nicky-package6";
// import { NormalButton, NormalButton2 } from "nicky-package7";
// import Itinerary from "./Itinerary/Itinerary.tsx";
import {
  NormalButton,
  NormalButton2,
  Draggable as Draggable2,
} from "nicky-package7";
import { PhoneIcon, UnlockIcon } from "@chakra-ui/icons";
// import {} from 'lodash'

// import "./App.css";
import Sathorn from "./Sathorn";
const DemoComponent = lazy(() => import("./DemoComponent"));
// import { NavList } from "./NavList";
import { AlertIcon } from "@primer/octicons-react";
// import { NavList as NavListPrimer } from "@primer/react";
import NavLists from "./NavLists";
import TestImg from "./TestImg";
import TestToggle from "./TestToggle";
import Overlays from "./Overlays";
import StickySidebar from "./StickySidebar";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import Dots from "./Dots";
import SwiperComponent from "./Swiper";
import SocialLogin from "./SocialLogin.tsx";
import img1 from "/img/harli-marten-n7a2OJDSZns-unsplash.jpg";
import img2 from "/img/joakim-honkasalo-HShd0DeMRIc-unsplash.jpg";
import img3 from "/img/jukka-heinovirta-NgZj1mZn1YY-unsplash.jpg";
import img4 from "/img/kien-do-NjT4O7WYmwk-unsplash.jpg";
import img5 from "/img/payam-moin-afshari-GpUoC2EtwQ4-unsplash.jpg";
import img6 from "/img/saad-chaudhry-cYpqYxGeqts-unsplash.jpg";
import img7 from "/img/alexandra-gorn-52jG7-FN22Y-unsplash.jpg";
import img8 from "/img/faiz-mohomed-8mYOlmdaOsc-unsplash.jpg";
import img9 from "/img/pete-alexopoulos-XyVQW6VcEs8-unsplash.jpg";
import { ModalContext } from "./hooks/ModalProvider.tsx";
import Hallows from "./Hallows";
import PaddingTest from "./PaddingTest";
import DisplayTest from "./DisplayTest";
import FireBaseComponent from "./FireBaseComponent";
import FishTeeth from "./FishTeeth";
import ButtonToggle2 from "./ButtonToggle2";
import { ProgressBar } from "@primer/react";
import ProgressBar2 from "./ProgressBar";
import Draggable from "./Draggable";
import GoogleLoginButton from "./GoogleLoginButton.tsx";
import GitHubLoginButton from "./GitHubLoginButton.tsx";
import TestForm from "./testForm.tsx";
import LocalStorage from "./localStorage.tsx";
import NavBar from "./NavBar/NavBar.tsx";
import ClipBoard from "./ClipBoard.tsx";
import Disclosure from "./Disclosure/Disclosure.tsx";
import ForwardRefTest from "./ForwardRef/ForwardRefTest.tsx";
import TextAgain from "./TextAgain.tsx";
import SearchForm from "./SearchForm/SearchForm.tsx";
import TestFetchData from "./TestFetchData.tsx";
import Battery from "./hooks/useBattery.tsx";
import UseCounters from "./hooks/useCounter.tsx";
import ButtonFramerMotion from "./FramerMotion/ButtonFramerMotion.tsx";
import { Itinerary } from "nicky-package7";
import DayPicker from "./DayPicker/DayPicker.tsx";
import DayPickerMultiple from "./DayPicker/DayPickerMultiple.tsx";
import DayPickerRange from "./DayPicker/DayPickerRange.tsx";
import CookiesAcceptance from "./CookiesAcceptance.tsx";
import TestContext from "./hooks/TestContext.tsx";
import TestFormWatchValue from "./TestFormWatchValue.tsx";
import ReducerComponent from "./Reducer/ReducerComponent.tsx";
import MapData from "./MapData/MapData.tsx";
import _ from "lodash";
import MovingObject from "./MovingObject/MovingObject.tsx";
import CreateMockup from "./CreateMockup/index.tsx";
import ReadImg from "./ReadImg/ReadImg.tsx";
import FormEvent from "./FormEvent/FormEvent.tsx";
import DragDrop from "./DragDrop/DragDrop.tsx";
import ReadAsText from "./ReadAsText/ReadAsText.tsx";
import CheckboxGroupComponent from "./Checkbox/Checkbox.tsx";
import Increment from "./Redux2/Increment.tsx";
import Users from "./Redux2/Users.tsx";
import TestTailwind from "./TestTailwind/TestTailwind.tsx";
import TabsBar from "./Tabs/Tabs.tsx";
import Globe from "./Globe/Globe.tsx";
import DndReact from "./DndReact/DndReact.tsx";
import CredentialLogin from "./CredentialLogin.tsx/index.tsx";
import BoxContainer from "./SprintToDo/BoxContainer";
import DndContainer from "./SprintToDo/DndContainer";
import FileUploader from "./DragDrop/DragDrop.tsx";
import GetUserMedia from "./hooks/useGetUserMedia";
import ImageCropper from "./ImageCropper";

const allImg = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

const allImg2 = allImg.reverse();

function App() {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  const scrollPosition = window.scrollY;
  const context = useContext(ModalContext);
  console.log(scrollHeight, "scrollHeight");
  console.log(clientHeight, "clientHeight");
  console.log("scrollTop", scrollTop);
  console.log("scrollPosition", scrollPosition);

  const [isOpen, setIsOpen] = useState<boolean>(true);

  function removeAccents(str) {
    return _.deburr(str);
  }

  // Example usage:
  const stringWithAccents = "cliché café mañana"; // Input string with accents
  const stringWithoutAccents = removeAccents(stringWithAccents);
  // console.log(stringWithoutAccents);
  // const ref = useRef<HTMLInputElement>(null);
  // const [data, setData] = useState<string>("");
  // const [newData, setNewData] = useState<string>("");
  // const [toggle, setToggle] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);

  // const handleClick = () => {
  //   ref?.current?.focus();
  //   console.log("focus clicked");
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* <form>
        <Sathorn label="sathorn" ref={ref}></Sathorn>
        <button type="button" onClick={handleClick}>
          click me
        </button>
      </form> */}
      {/* <label htmlFor="">your new data</label>
      <br />
      <input
        {...props}
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />
      <br />

      <h2>change data in demo component</h2>

      <button onClick={() => setToggle(!toggle)}> click to show</button>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <div>
        {toggle ? (
          <Suspense fallback={<Loading></Loading>}>
            <DemoComponent content={newData} />
          </Suspense>
        ) : (
          <Loading></Loading>
        )}
      </div> */}
      {/* <TestImg></TestImg> */}
      {/* <TestToggle></TestToggle>
      <button onClick={() => setIsOpen(!isOpen)}> Click to Open Modal</button>
      <Overlays open={isOpen} onClose={() => setIsOpen(!isOpen)}></Overlays> */}
      {/* <div style={{ height: "200vh", backgroundColor: "yellow" }}></div> */}
      {/* <StickySidebar></StickySidebar> */}
      {/* <Menu></Menu> */}
      {/* <Menu2></Menu2> */}
      {/* <Dots></Dots> */}
      {/* <div className="nicky"></div>
      <SwiperComponent>
        {allImg.map((image) => (
          <>
            <SwiperSlide className="swiperChildren">
              <img src={image} alt="sss" />
            </SwiperSlide>
            <div style={{ width: "10%" }}></div>
          </>
        ))}
      </SwiperComponent>
      <SwiperComponent reverse={true} delay={1000}>
        {allImg.map((image) => (
          <>
            <SwiperSlide className="swiperChildren">
              <img src={image} alt="sss" />
            </SwiperSlide>
            <div style={{ width: "10%" }}></div>
          </>
        ))}
      </SwiperComponent>
      <SwiperComponent delay={2000}>
        {allImg2.map((image) => (
          <>
            <SwiperSlide className="swiperChildren">
              <img src={image} alt="sss" />
            </SwiperSlide>
            <div style={{ width: "10%" }}></div>
          </>
        ))}
      </SwiperComponent>
      <div className="nicky2"></div> */}
      {/* <Hallows></Hallows> */}
      {/* <PaddingTest></PaddingTest> */}
      {/* <DisplayTest></DisplayTest> */}
      {/* <FireBaseComponent></FireBaseComponent> */}
      {/* <FishTeeth></FishTeeth> */}
      {/* <ButtonToggle2></ButtonToggle2> */}
      {/* <ProgressBar2></ProgressBar2> */}
      {/* <Draggable></Draggable> */}
      {/* <ClipBoard></ClipBoard> */}

      {/* <GoogleLoginButton></GoogleLoginButton>
      <GitHubLoginButton></GitHubLoginButton> */}
      {/* <TestForm></TestForm> */}
      {/* <LocalStorage></LocalStorage> */}
      {/* <NavBar></NavBar> */}
      {/* <Disclosure></Disclosure> */}
      {/* <ForwardRefTest></ForwardRefTest> */}
      {/* <TextAgain></TextAgain> */}
      {/* <SearchForm></SearchForm> */}
      {/* <TestFetchData></TestFetchData> */}
      {/* <Battery></Battery> */}
      {/* <UseCounters></UseCounters> */}
      {/* <ButtonFramerMotion></ButtonFramerMotion> */}
      {/* <div>{LuckyAlphabet("nicky")}</div> */}
      {/* <div>{LuckyAlphabet("nicky")}</div> */}
      {/* <Itinerary day={5} month={10}></Itinerary> */}

      {/* <NormalButton> Hello </NormalButton>
      <NormalButton2 message="hello thailand" /> */}
      {/* <SocialLogin></SocialLogin> */}
      {/* <Draggable2>
        <PhoneIcon />
        <UnlockIcon />
      </Draggable2> */}
      {/* <Draggable></Draggable> */}
      {/* <PB></PB> */}
      {/* <Itinerary day={6} month={4}></Itinerary> */}
      {/* <DayPicker></DayPicker> */}
      {/* <DayPickerMultiple></DayPickerMultiple> */}
      {/* <DayPickerRange></DayPickerRange> */}
      {/* <CookiesAcceptance></CookiesAcceptance> */}
      {/* <TestContext></TestContext> */}
      {/* <div>{context.numState}</div> */}
      {/* <ReducerComponent /> */}
      {/* <TestFormWatchValue></TestFormWatchValue> */}
      {/* <MapData></MapData> */}
      {/* <MovingObject /> */}
      {/* <CreateMockup></CreateMockup> */}
      {/* <ReadImg></ReadImg> */}
      {/* <FormEvent></FormEvent> */}
      {/* <DragDrop></DragDrop> */}
      {/* <CheckboxGroupComponent /> */}
      {/* <ReadAsText></ReadAsText> */}
      {/* <Increment /> */}
      {/* <Users /> */}
      {/* <TestTailwind /> */}
      {/* <TabsBar /> */}
      {/* <Globe /> */}
      {/* <DndReact /> */}
      {/* <BoxContainer /> */}
      {/* <DndContainer /> */}
      {/* <CredentialLogin /> */}
      {/* <FileUploader /> */}
      {/* <GetUserMedia /> */}
      <ImageCropper />
    </>
  );
}

export default App;
