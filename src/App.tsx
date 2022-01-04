import React, { useCallback, useState } from "react";
import { Curtain } from "./curtain/Curtain";
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
import { InduvidualSolution, WebProducts } from "./product/products";
import { Profile } from "./profile/Profile";

function App() {
  initializeIcons();

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
            Home
          </div>
        </Menu>
        <Swiper
          effect="fade"
          onSwiper={setSwiperRef}
          slidesPerView={1}
          keyboard={{
            enabled: true,
          }}
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
                <AppSlide title="Weblösung" products={WebProducts} />
              </SwiperSlide>
              <SwiperSlide>
                <AppSlide
                  title="Induvidual Entwicklungen"
                  products={InduvidualSolution}
                />
              </SwiperSlide>
            </HorizontalSwiper>
          </SwiperSlide>
          <SwiperSlide virtualIndex={3}>
            <HorizontalSwiper>
              <SwiperSlide>
                <Profile slideTo={slideTo} sliderId={3} />
              </SwiperSlide>
              <SwiperSlide>
                <div className="preferences">test2</div>
              </SwiperSlide>
            </HorizontalSwiper>
          </SwiperSlide>
        </Swiper>
      </div>
    </Curtain>
  );
}

export default App;
