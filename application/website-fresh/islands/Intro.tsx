import contacts from "@/data/contacts.json" with { type: "json" };
import { useSignal } from "@preact/signals";
import maplibregl from "maplibre-gl";
import { useContext } from "preact/hooks";
import { Store } from "../modules/store.ts";
import MapCanvas from "./MapCanvas.tsx";

export default function Intro() {
  const map = useSignal<maplibregl.Map | undefined>(undefined);
  const bounds = useSignal<maplibregl.LngLatBoundsLike>([90, -4, 145, 4]);
  const introText = useSignal("I am from this big archipelagic country named Indonesia");
  return (<>
    <Store.Provider value={{ map, introText, bounds }}>
      <IntroText />
      <div className="flex vertical small-gap" style={{ width: '50%', height: '100%' }}>
        <div className="flex ai-center ac-center jc-center text-center" style={{ fontSize: "x-large" }}>{introText}</div>
        <MapCanvas />
      </div>
    </Store.Provider>
  </>)
}

function IntroText() {
  const { introText, bounds } = useContext(Store);
  return (
    <div className='flex vertical gap' style={{ width: '50%', overflowY: 'auto' }}>
      <img
        onMouseEnter={() => {
          introText.value = "I take this picture in this area";
          bounds.value = [6.834266, 52.229522, 6.868454, 52.2511069];
        }}
        src='/images/20211105_133525.jpg'
        style={{
          width: '20vh',
        }}
      />
      <div className='flex title ai-center' onMouseEnter={() => {
        bounds.value = [90, -4, 145, 4];
        introText.value = "I am from this big archipelagic country named Indonesia";
      }}>
        Hi! I am Ramadhan &nbsp;{' '}
        <div style={{ fontSize: 'small' }}>(yeah, only Ramadhan, 1 word)</div>
      </div>
      <div className='paragraph'>
        I like to create geospatial tutorials and hoops on the weekend.
      </div>
      <div className='paragraph inline' onMouseEnter={() => {
        introText.value = "I work like around here"
        bounds.value = [4.31286, 52.0743484, 4.3269238, 52.0838577];
      }}>
        I currently working as GeoAI and Earth Observation Engineer at &nbsp;
        <a href='https://space4good.com' target='_blank'>
          Space4Good
        </a>
      </div>
      <div className='paragraph inline' onMouseEnter={() => {
        introText.value = "I studied for my undergraduate somewhere here"
        bounds.value = [110.37111, -7.779742, 110.3868211, -7.76120403];
      }}>
        I graduated from Cartography and Remote Sensing bachelor's study program, &nbsp;
        <a href='https://ugm.ac.id' target='_blank'>
          Universitas Gadjah Mada
        </a>
      </div>
      <div className='paragraph inline'>
        <div onMouseEnter={() => {
          introText.value = "I was born in this city"
          bounds.value = [103.589664, -1.6350644, 103.6283869, -1.5953036];
        }}>
        Originally, I was from Jambi,
        </div>
        <div onMouseEnter={() => {
          introText.value = "I grew around this neighborhood"
          bounds.value = [104.686403, -2.92917853, 104.7165752, -2.900055];
        }}>
        then I studied for my primary education in Palembang.
        </div>
      </div>
      <div className='paragraph inline' onMouseEnter={() => {
          introText.value = "I live in this town for now"
          bounds.value = [5.662747, 52.0009261, 5.6803224, 52.012451];
        }}>Currently I live in Bennekom, Netherlands.</div>
      <Contact />
    </div>
  );
}

function Contact() {
  const contactList = contacts.map((dict, key) => (
    <div
      key={key}
      style={{
        padding: '1vh',
        height: '4vh',
        backgroundColor: 'whitesmoke',
      }}
      className='flex'
    >
      <a href={dict.href} target='_blank'>
        {/* @ts-ignore */}
        <img src={dict.image} style={{ height: '4vh' }} />
      </a>
    </div>
  ));

  return <div className='flex small-gap'>{contactList}</div>;
}
