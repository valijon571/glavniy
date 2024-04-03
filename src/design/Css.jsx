import styled from "styled-components";
export const Css = styled.div`
  & .container {
    padding: 0px 125px;
    @media (max-width: 700px) {
      padding: 0px 30px;
    }
    & .first {
      display: flex;
      justify-content: space-between;
      & .first_lead_agent {
        display: flex;
        align-items: center;
        & img {
          width: 33px;
          height: 47px;
          margin-right: 10px;
        }
        & .first_lead_tripusk {
          color: #235dff;
          font-family: Urbanist;
          font-size: 26px;
          font-style: normal;
          font-weight: 900;
          line-height: 100%;
          & span {
            color: #235dff;
            font-family: Urbanist;
            font-size: 20px;
            font-style: normal;
            font-weight: 100;
            line-height: 100%;
            @media (max-width: 780px) {
              display: none;
            }
          }
        }
      }
      & .first_lead {
        display: flex;
        align-items: center;
        & .first_lead_text {
          font-family: Urbanist;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          margin-right: 15px;
          @media (max-width: 780px) {
            display: none;
          }
        }
        & img {
          margin-right: 10px;
          width: 20px;
        }
      }
    }
    & .second {
      & hr {
        background: #235dff;
        height: 2px;
        @media (max-width: 780px) {
          display: none;
        }
      }
    }
    & .third {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      @media (max-width: 780px) {
        display: none;
      }
      & .third_text {
        display: flex;
        align-items: center;
        & .third_text_gla {
          color: #2b3f5a;
          font-family: Urbanist;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          margin-right: 15px;
        }
        & .third_text_zay {
          color: #2b3f5a;
          font-family: Urbanist;
          font-size: 23px;
          font-style: normal;
          font-weight: 500;
          margin-right: 15px;
        }
      }
      & .third_Good {
        display: flex;
        align-items: center;
        & .third_Good_text {
          margin-right: 20px;
          display: flex;
          align-items: center;
          & img {
            margin-right: 10px;
            width: 52px;
            height: 52px;
          }
          & .Andrew {
            & p {
              font-family: Urbanist;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 100%;
              margin: 0px;
            }
            & h4 {
              margin: 5px 0px 0px 0px;
              font-family: Urbanist;
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: 100%;
            }
          }
        }
        & .third_Good_img {
          & img {
            width: 52px;
            height: 52px;
          }
        }
      }
    }
  }

  & .footer {
    text-align: center;
    & h6 {
      font-family: Urbanist;
      font-size: 56px;
      font-weight: 600;
      line-height: 60px;
      text-align: center;
      margin: 45px 0px;
      color: #ffffff;
      @media (max-width: 750px) {
        font-size: 45px;
        @media (max-width: 520px) {
          font-size: 35px;
          @media (max-width: 420px) {
            font-size: 25px;
          }
        }
      }
    }
    & .footer_text {
      font-family: Urbanist;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 65px;
      @media (max-width: 420px) {
        font-size: 14px;
      }
    }
    & .footer_list {
      overflow-y: auto;
      padding: 0px 20px;

      & .list_on {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 40px;
        padding-left: 60px;
        width: 1300px;
        @media (max-width: 950px) {
          width: 1237px;

          @media (max-width: 750px) {
            padding-left: 70px;
            width: 1160px;
            @media (max-width: 550px) {
              width: 1043px;
              @media (max-width: 480px) {
                width: 956px;
                @media (max-width: 410px) {
                  width: 774px;
                }
              }
            }
          }
        }

        & img {
          margin-right: 9%;
          @media (max-width: 1160px) {
            width: 130px;
            height: 130px;
            @media (max-width: 950px) {
              width: 120px;
              height: 120px;
              @media (max-width: 750px) {
                width: 110px;
                height: 110px;
                @media (max-width: 500px) {
                  width: 100px;
                  height: 105px;
                  @media (max-width: 470px) {
                    width: 90px;
                    height: 90px;
                    @media (max-width: 410px) {
                      width: 80px;
                      height: 80px;
                    }
                  }
                }
              }
            }
          }
        }
      }
      & .list_one {
        display: flex;
        justify-content: flex-end;
        padding-right: 60px;
        width: 1400px;
        @media (max-width: 950px) {
          width: 1237px;
          margin-bottom: 145px;
          @media (max-width: 750px) {
            padding-right: 46px;
            width: 1160px;
            @media (max-width: 550px) {
              width: 1043px;
              @media (max-width: 480px) {
                width: 956px;
                @media (max-width: 410px) {
                  width: 831px;
                }
              }
            }
          }
        }
        & img {
          margin-left: 9%;
          @media (max-width: 1160px) {
            width: 130px;
            height: 130px;
            @media (max-width: 950px) {
              width: 120px;
              height: 120px;
              @media (max-width: 750px) {
                width: 110px;
                height: 110px;
                @media (max-width: 500px) {
                  width: 100px;
                  height: 105px;
                  @media (max-width: 470px) {
                    width: 90px;
                    height: 90px;
                    @media (max-width: 410px) {
                      width: 80px;
                      height: 80px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  & .order_background {
    background: url(/image/find-your-travel-route.png);
    background-size: cover;
    padding: 110px 0px;
    & .order {
      text-align: center;
      background: #ffffff;
      width: 530px;
      margin-left: 32%;
      padding: 10px 0px;
      border-radius: 16.02px;
      @media (max-width: 1400px) {
        margin-left: 30%;
        @media (max-width: 1250px) {
          margin-left: 28%;
          @media (max-width: 1000px) {
            margin-left: 25%;
            @media (max-width: 960px) {
              margin-left: 22%;
              @media (max-width: 900px) {
                margin-left: 20%;
                @media (max-width: 800px) {
                  margin-left: 16%;
                  @media (max-width: 750px) {
                    margin-left: 12%;
                    @media (max-width: 680px) {
                      margin-left: 10%;
                      @media (max-width: 650px) {
                        margin-left: 8%;
                        @media (max-width: 630px) {
                          margin-left: 5%;
                          @media (max-width: 575px) {
                            margin-left: 4%;
                            width: 100%;
                            @media (max-width: 570px) {
                              width: 100%;
                              margin-left: 0%;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      & h5 {
        font-family: Urbanist;
        font-size: 32px;
        font-weight: 600;
        line-height: 51.2px;
        letter-spacing: 0.2670329511165619px;
        text-align: center;
        margin: 0px;
        @media (max-width: 450px) {
          font-size: 32px;
        }
      }
      & .select_div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 15px;

        & .button_on {
          & h6 {
            font-family: Urbanist;
            font-size: 18px;
            font-weight: 500;
            line-height: 28.8px;
            letter-spacing: 0.2670329511165619px;
            text-align: left;
            margin: 0px;
            @media (max-width: 440px) {
              font-size: 16px;
              @media (max-width: 400px) {
                font-size: 14px;
                @media (max-width: 350px) {
                  font-size: 12px;
                }
              }
            }
          }
          & .button_volvo {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 222px;
            height: 57.11px;
            padding: 10px;
            gap: 20px;
            border-radius: 16px;
            background: #235dff14;
            border: 2px solid #235dff;
            @media (max-width: 470px) {
              width: 192px;
              height: 50.11px;
              @media (max-width: 400px) {
                width: 160px;
                height: 45.11px;
                @media (max-width: 340px) {
                  width: 140px;
                  height: 40.11px;
                  @media (max-width: 300px) {
                    width: 133px;
                  }
                }
              }
            }
            & .volvo_on {
              display: flex;
              font-family: Urbanist;
              font-size: 20px;
              font-weight: 600;
              line-height: 32px;
              letter-spacing: 0.2670329511165619px;
              text-align: left;
              color: #212121;
              @media (max-width: 450px) {
                font-size: 17px;
                @media (max-width: 400px) {
                  font-size: 13px;
                  @media (max-width: 350px) {
                    font-size: 10px;
                  }
                }
              }
              & .LuPlaneTakeoff {
                color: #235dff;
                width: 21px;
                height: 25px;
                margin-right: 10px;
                @media (max-width: 400px) {
                  width: 18px;
                }
              }
            }
            & img {
              width: 13px;
              height: 9px;
            }
          }
        }
        & .button_one {
          & h6 {
            font-family: Urbanist;
            font-size: 18px;
            font-weight: 500;
            line-height: 28.8px;
            letter-spacing: 0.2670329511165619px;
            text-align: left;
            margin: 0px;
            @media (max-width: 440px) {
              font-size: 16px;
              @media (max-width: 400px) {
                font-size: 14px;
                @media (max-width: 350px) {
                  font-size: 12px;
                }
              }
            }
          }
          & .button_stap {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 222px;
            height: 57.11px;
            text-align: left;
            padding: 10px;
            gap: 20px;
            border-radius: 16px;
            border: 2px solid #afa9a9;
            background: #e0e0e0;
            @media (max-width: 470px) {
              width: 192px;
              height: 50.11px;
              @media (max-width: 400px) {
                width: 160px;
                height: 45.11px;
                @media (max-width: 340px) {
                  width: 140px;
                  height: 40.11px;
                  @media (max-width: 300px) {
                    width: 133px;
                  }
                }
              }
            }
            & .volvo {
              display: flex;
              font-family: Urbanist;
              font-size: 20px;
              font-weight: 600;
              line-height: 32px;
              letter-spacing: 0.2670329511165619px;
              text-align: left;
              color: #212121;
              @media (max-width: 440px) {
                font-size: 17px;
                @media (max-width: 400px) {
                  font-size: 13px;
                  @media (max-width: 350px) {
                    font-size: 10px;
                  }
                }
              }
              & .piAirplaneLandingLight {
                width: 21px;
                height: 25px;
                margin-right: 10px;
                color: #212121;
              }
            }
            & img {
              width: 13px;
              height: 9px;
            }
          }
        }
        & .button_ont {
          & h6 {
            font-family: Urbanist;
            font-size: 18px;
            font-weight: 500;
            line-height: 28.8px;
            letter-spacing: 0.2670329511165619px;
            text-align: left;
            margin: 0px;
            @media (max-width: 440px) {
              font-size: 16px;
              @media (max-width: 400px) {
                font-size: 14px;
                @media (max-width: 350px) {
                  font-size: 12px;
                }
              }
            }
          }
          & .icon {
            display: flex;
            align-items: center;
            width: 222px;
            height: 57.11px;
            text-align: left;
            padding: 10px;
            gap: 20px;
            border-radius: 16px;
            border: 2px solid #afa9a9;
            background: #e0e0e0;
            font-family: Urbanist;
            font-size: 20px;
            font-weight: 600;
            line-height: 32px;
            letter-spacing: 0.2670329511165619px;
            text-align: left;
            @media (max-width: 470px) {
              width: 192px;
              height: 50.11px;
              @media (max-width: 450px) {
                font-size: 17px;
                @media (max-width: 400px) {
                  width: 160px;
                  height: 45.11px;
                  font-size: 13px;
                  @media (max-width: 350px) {
                    font-size: 10px;
                    @media (max-width: 340px) {
                      width: 140px;
                      height: 40.11px;
                      @media (max-width: 300px) {
                        width: 133px;
                      }
                    }
                  }
                }
              }
            }

            & .luUsers {
              color: #235dff;
              width: 21px;
              height: 25px;
              @media (max-width: 400px) {
                width: 18px;
              }
            }
            & .faChild {
              color: #212121;
              width: 21px;
              height: 25px;
              @media (max-width: 400px) {
                width: 18px;
              }
            }
            & .luCalendarDays {
              color: #235dff;
              width: 21px;
              height: 25px;
              margin-right: -10px;
              @media (max-width: 400px) {
                width: 18px;
              }
            }
            & .riHotelLine {
              color: #235dff;
              width: 21px;
              height: 25px;
              margin-right: 13px;
              @media (max-width: 400px) {
                width: 18px;
              }
            }
            & .giCarSeat {
              color: #212121;
              width: 21px;
              height: 25px;
              margin-right: 10px;
              @media (max-width: 400px) {
                width: 18px;
              }
            }
            & .ioFastFoodOutline {
              color: #212121;
              width: 21px;
              height: 25px;
              margin-right: 10px;
              @media (max-width: 400px) {
                width: 18px;
              }
            }
            & img {
              width: 13px;
              height: 9px;
            }

            & .volvo_to {
              margin-right: 33px;
              color: #9e9e9e;
              @media (max-width: 500px) {
                margin-right: 0px;
              }
            }
          }
        }
      }
      & .write {
        & h6 {
          font-family: Urbanist;
          font-size: 18px;
          font-weight: 500;
          line-height: 28.8px;
          letter-spacing: 0.2670329511165619px;
          text-align: left;
          margin: 25px 0px 5px 25px;
          @media (max-width: 440px) {
            font-size: 16px;
            @media (max-width: 400px) {
              font-size: 14px;
              @media (max-width: 350px) {
                font-size: 12px;
              }
            }
          }
        }
        & .write_step {
          display: flex;
          justify-content: space-around;
          background: #fafafa;
          width: 90%;
          height: 78px;
          margin-left: 25px;
          gap: 30px;
          border-radius: 16px;
          border: 2px solid #afa9a9;
          align-items: center;
          & button {
            font-family: Urbanist;
            font-size: 20px;
            font-weight: 600;
            line-height: 32px;
            letter-spacing: 0.2670329511165619px;
            width: 189px;
            height: 45px;
            top: 17px;
            left: 420px;
            gap: 0px;
            border-radius: 50px;
            border: 2px solid #afa9a9;
            @media (max-width: 450px) {
              font-size: 13px;
              width: 165px;
              @media (max-width: 400px) {
                font-size: 11px;
                width: 155px;
              }
            }
          }
          @media (max-width: 400px) {
            gap: 0px;
            margin-left: 18px;
          }
          & .write_step_div {
            display: flex;
            align-items: center;
            color: #9e9e9e;
            @media (max-width: 430px) {
              font-size: 14px;
            }
            & .luWallet {
              color: #212121;
              width: 21px;
              height: 25px;
              margin-right: 20px;
              @media (max-width: 400px) {
                width: 18px;
                margin-left: 10px;
              }
            }
          }
        }
      }
      & .information {
        & h6 {
          font-family: Urbanist;
          font-size: 18px;
          font-weight: 500;
          line-height: 28.8px;
          letter-spacing: 0.2670329511165619px;
          text-align: left;
          margin: 25px 0px 5px 25px;
          @media (max-width: 440px) {
            font-size: 16px;
            @media (max-width: 400px) {
              font-size: 14px;
              @media (max-width: 350px) {
                font-size: 12px;
              }
            }
          }
        }
        & .information_text {
          text-align: left;
          padding: 15px;
          background: #fafafa;
          width: 84%;
          height: 150px;
          margin-left: 25px;
          border-radius: 16px;
          border: 2px solid #afa9a9;
          font-family: Urbanist;
          font-size: 20.03px;
          font-weight: 500;
          line-height: 32.05px;
          letter-spacing: 0.2670329511165619px;
          text-align: left;
          color: #9e9e9e;
          margin-bottom: 15px;
          @media (max-width: 450px) {
            font-size: 17.03px;

            @media (max-width: 400px) {
              margin-left: 18px;
            }
          }
        }
      }

      & .submet {
        background: #1c4acc;
        color: #ffffff;
        font-family: Urbanist;
        font-size: 21.36px;
        font-weight: 700;
        line-height: 34.18px;
        letter-spacing: 0.2670329511165619px;
        text-align: center;
        width: 94%;
        height: 78px;
        border-radius: 16px;
        border: 2px solid #1c4acc;
        margin-bottom: 25px;
        @media (max-width: 400px) {
          font-size: 18.36px;
        }
      }
    }
  }
`;
