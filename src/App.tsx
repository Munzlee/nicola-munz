import React, { useCallback, useState } from "react";
import Left from "./pics/Left.png";
import Right from "./pics/Right.png";
import logo from "./pics/logo.png";
import { Menu } from "./menu/Menu";
import { IconButton } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Mousewheel,
} from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./App.css";
import HorizontalSwiper from "./swipers/horizontal/HorizontalSwiper";
import AppSlide from "./product/AppSlide";
import { WebProducts } from "./product/products";
import { Profile } from "./profile/Profile";
import { Impresum } from "./impresum/Impresum";
import { Curtain } from "react-curtain";
import { DesignedAppSlide } from "./product/DesignedAppSlide";

function App() {
  initializeIcons();
  if (window.addEventListener) {
    window.addEventListener("orientationchange", function () {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  }

  SwiperCore.use([Mousewheel, Keyboard, Pagination, Navigation]);
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const slideTo = useCallback(
    (index: number) => {
      swiperRef?.slideTo(index - 1, 0);
    },
    [swiperRef]
  );

  return (
    <Curtain
      styleLeftSide={{
        backgroundImage: `url(${Left})`,
        backgroundColor: "#0C0B22",
      }}
      styleRightSide={{
        backgroundImage: `url(${Right})`,
        backgroundColor: "#0C0B22",
      }}
      automaticOpening={true}
      automaticOpeningDelay={500}
      clickOpening={true}
      touchOpening={true}
      scrollOpening={true}
    >
      <div className="App">
        <Menu checked={menuOpen} onCkeck={setMenuOpen}>
          <div
            onClick={() => {
              setMenuOpen(false);
              slideTo(1);
            }}
          >
            Home
          </div>
          <div
            onClick={() => {
              setMenuOpen(false);
              slideTo(2);
            }}
          >
            Angebot
          </div>
          <div
            onClick={() => {
              setMenuOpen(false);
              slideTo(3);
            }}
          >
            Nicola Munz
          </div>
          <div
            onClick={() => {
              setMenuOpen(false);
              slideTo(4);
            }}
          >
            Impresum
          </div>
        </Menu>
        <Swiper
          observer
          watchOverflow
          nested
          initialSlide={0}
          effect="fade"
          onSwiper={setSwiperRef}
          slidesPerView={1}
          keyboard={{
            enabled: true,
          }}
          watchSlidesProgress
          mousewheel={true}
          navigation
          scrollbar={{ draggable: true }}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide virtualIndex={1}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Wir finden immer einen Weg!</p>
              <h2>Software Entwickler</h2>
              <h2>Nicola Munz </h2>
              <IconButton
                className="App-link"
                onClick={() => slideTo(2)}
                iconProps={{ iconName: "ChevronDown", style: { fontSize: 32 } }}
              />
            </header>
          </SwiperSlide>
          <SwiperSlide virtualIndex={2}>
            <HorizontalSwiper>
              <SwiperSlide>

                <DesignedAppSlide />
              </SwiperSlide>
              <SwiperSlide>
                <AppSlide title="Webl??sung" products={WebProducts} />
              </SwiperSlide>

            </HorizontalSwiper>
          </SwiperSlide>
          <SwiperSlide virtualIndex={3}>
            <HorizontalSwiper>
              <SwiperSlide>
                <Profile slideTo={slideTo} sliderId={3} />
              </SwiperSlide>
            </HorizontalSwiper>
          </SwiperSlide>
          <SwiperSlide virtualIndex={4}>
            <Impresum />
          </SwiperSlide>
        </Swiper>
      </div>
    </Curtain>
  );
}

export default App;
