import styled from "styled-components";
export const Header_homeStyle = styled.div`
  & .header_home {
    width: 100%;
    height: 2850px;
    top: 220px;
    gap: var(--GapandPaddingPositiveGapPadding-12);
    border-radius: 40px 40px 0px 0px;
    opacity: 0px;
    background: linear-gradient(
      0deg,
      #0450c2 0%,
      #0a46a7 27.11%,
      #182e63 93.82%,
      #1e2344 109.5%
    );
    @media (max-width: 950px) {
      height: 100%;
    }

    & .header_home_find {
      display: flex;
      justify-content: space-between;
      @media (max-width: 890px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      & h1 {
        color: #ffffff;
        font-family: Urbanist;
        font-size: 65px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
        margin-left: 125px;
        margin-top: 100px;
        @media (max-width: 700px) {
          font-size: 50px;
          margin-left: 10%;
          @media (max-width: 300px) {
            font-size: 30px;
            margin-left: 5%;
          }
        }
      }
      & img {
        width: 50%;
      }
    }
    & .cards {
      & .cards_text {
        text-align: center;
        color: #ffffff;
        font-family: Urbanist;
        font-size: 45px;
        font-style: normal;
        font-weight: 600;
        /* margin: 15px 0px 0px; */
      }
      & .cards_card {
        display: flex;
        justify-content: center;
        @media (max-width: 1000px) {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        & .card {
          background: #ffffff;
          border-radius: 20px;
          width: 20%;
          margin-right: 20px;
          padding: 23px;
          @media (max-width: 1000px) {
            width: 245px;
            margin-bottom: 25px;
            @media (max-width: 390px) {
              width: 80%;
              margin-right: 0px;
            }
          }
          & img {
            width: 150px;
            height: 150px;
          }
          & h5 {
            color: #1e2344;
            font-family: Urbanist;
            font-size: 22px;
            font-weight: 700;
            line-height: 26px;
            margin: 15px 0px;
          }
          & .card_nae {
            color: #1e2344;
            font-family: Urbanist;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            margin: 11px 0px 0px;
          }
        }
      }
    }
  }
`;
