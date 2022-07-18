import styled from "styled-components";
import { colors } from "@utils";
import LoginBg from "../Images/LoginBg.png";

export const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: row;

  .side_bar_container {
  }
  .header_and_content {
    width: 100%;
    background-color: ${colors.background};
  }
  .app_content {
    padding: 31px 40px;
  }
`;

export const StyledLoginLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  .side_backgroung {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${LoginBg});
    background-repeat: no-repeat;
    background-size: cover;

    .login_swiper {
      /* height: 500px; */
      .swiper-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        .swiper-pagination-bullet {
          background: #ffffff;
          width: 6px;
          height: 6px;
          margin: 0 10px;
        }
        .swiper-pagination-bullet-active {
          width: 10px;
          height: 10px;
        }
      }
    }

    .login_swiper_slide {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-bottom: 50px;

      h2,
      p {
        color: #ffffff;
      }

      h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
      }

      p {
        width: 338px;

        text-align: center;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.2px;

        opacity: 0.5;
      }

      img {
        object-fit: contain;
        margin-bottom: 20px;
      }
    }
  }
  .content {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${colors.backgroundWhite};
  }
`;
