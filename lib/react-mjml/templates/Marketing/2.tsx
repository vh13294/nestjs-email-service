import React from 'react';
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlNavbar,
  MjmlNavbarLink,
  MjmlText,
  MjmlButton,
  MjmlSocial,
  MjmlSocialElement,
} from 'mjml-react';

export function marketingTwo(): React.ReactElement {
  return (
    <Mjml>
      <MjmlBody background-color="#d6dde5">
        <MjmlSection background-color="#ffffff">
          <MjmlColumn width="50%">
            <MjmlImage
              href="https://mjml.io"
              src="http://191n.mj.am/img/191n/3s/x4u.png"
              alt="Racoon logo"
              align="center"
              padding="10px"
            ></MjmlImage>
          </MjmlColumn>
          <MjmlColumn width="50%">
            <MjmlNavbar
              base-url="https://mjml.io"
              hamburger="hamburger"
              ico-color="#fa8739"
            >
              <MjmlNavbarLink href="https://mjml.io" color="#000000">
                home
              </MjmlNavbarLink>
              <MjmlNavbarLink href="https://mjml.io" color="#000000">
                blog
              </MjmlNavbarLink>
              <MjmlNavbarLink href="https://mjml.io" color="#000000">
                store
              </MjmlNavbarLink>
            </MjmlNavbar>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#fa8739"
          padding-bottom="0px"
          padding-top="0"
        >
          <MjmlColumn width="200px">
            <MjmlText
              align="left"
              color="#fff"
              font-size="40px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="10px"
              padding-top="10px"
            >
              <p style={{ fontSize: '17px' }}>SPRING PROMO</p>
              <p>50%</p>
              <p>OFFER</p>
              <p style={{ fontSize: '13px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <br />
              </p>
            </MjmlText>
            <MjmlButton
              background-color="#fff"
              color="#fa8739"
              font-size="16px"
              align="center"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="10px"
            >
              SHOP NOW
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn width="400px">
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/xjg.jpg"
              alt="Clothes set"
              align="center"
              border="none"
              width="400px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="0px"
              padding-top="0"
            ></MjmlImage>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#2f323b"
          padding-bottom="0px"
          padding-top="0"
        >
          <MjmlColumn width="25%">
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4t.png"
              alt="Box free shipping"
              align="center"
              border="none"
              width="42px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="10px"
              padding-top="10px"
            ></MjmlImage>
          </MjmlColumn>
          <MjmlColumn width="75%">
            <MjmlText
              align="left"
              color="#fff"
              font-size="18px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="10px"
              padding-top="10px"
            >
              <p>
                FREE SHIPPING ON ORDER
                <span
                  style={{ fontWeight: 'bold', color: 'rgb(250, 135, 57)' }}
                >
                  OVER 55&#x20AC;
                </span>
              </p>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection background-color="#fff" padding-bottom="20px">
          <MjmlColumn vertical-align="bottom">
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4v.jpg"
              alt="Chester tank"
              align="center"
              border="none"
              width="209px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="20px"
              padding-top="30px"
            ></MjmlImage>
            <MjmlText
              font-weight="bold"
              align="center"
              color="#000"
              font-size="15px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p>CHESTER TANK</p>
              <p style={{ color: 'rgb(250, 135, 57)' }}>15&#x20AC;</p>
            </MjmlText>
            <MjmlButton
              background-color="#fa8739"
              color="#fff"
              font-size="13px"
              align="center"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn vertical-align="bottom">
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4g.jpg"
              alt="Beyond backpack"
              align="center"
              border="none"
              width="178px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="20px"
            ></MjmlImage>
            <MjmlText
              font-weight="bold"
              align="center"
              color="#000"
              font-size="15px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p>BEYOND BACKPACK</p>
              <p style={{ color: 'rgb(250, 135, 57)' }}>20&#x20AC;</p>
            </MjmlText>
            <MjmlButton
              background-color="#fa8739"
              color="#fff"
              font-size="13px"
              align="center"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn vertical-align="bottom">
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x46.jpg"
              alt="Jensen shorts"
              align="center"
              border="none"
              width="182px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="20px"
              padding-top="30px"
            ></MjmlImage>
            <MjmlText
              font-weight="bold"
              align="center"
              color="#000"
              font-size="15px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0px"
            >
              <p>JENSEN SHORTS</p>
              <p style={{ color: 'rgb(250, 135, 57)' }}>28&#x20AC;</p>
            </MjmlText>
            <MjmlButton
              background-color="#fa8739"
              color="#fff"
              font-size="13px"
              align="center"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection background-color="#fff" padding-bottom="20px">
          <MjmlColumn vertical-align="bottom">
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4h.jpg"
              alt="Verdant cap"
              align="center"
              border="none"
              width="129px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="20px"
              padding-top="20px"
            ></MjmlImage>
            <MjmlText
              font-weight="bold"
              align="center"
              color="#000"
              font-size="15px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p>VERDANT CAP</p>
              <p style={{ color: 'rgb(250, 135, 57)' }}>20&#x20AC;</p>
            </MjmlText>
            <MjmlButton
              background-color="#fa8739"
              color="#fff"
              font-size="13px"
              align="center"
              border="none"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn vertical-align="bottom">
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4i.jpg"
              alt="Blake polo shirt"
              align="center"
              border="none"
              width="208px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="20px"
              padding-top="20px"
            ></MjmlImage>
            <MjmlText
              font-weight="bold"
              align="center"
              color="#000"
              font-size="15px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p>BLAKE POLO SHIRT</p>
              <p style={{ color: 'rgb(250, 135, 57)' }}>25&#x20AC;</p>
            </MjmlText>
            <MjmlButton
              background-color="#fa8739"
              color="#fff"
              font-size="13px"
              align="center"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn vertical-align="bottom">
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4j.jpg"
              alt="Sketch floral"
              align="center"
              border="none"
              width="72px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="20px"
              padding-top="20px"
            ></MjmlImage>
            <MjmlText
              font-weight="bold"
              align="center"
              color="#000"
              font-size="15px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p>SKETCH FLORAL</p>
              <p style={{ color: 'rgb(250, 135, 57)' }}>23&#x20AC;</p>
            </MjmlText>
            <MjmlButton
              background-color="#fa8739"
              color="#fff"
              font-size="13px"
              align="center"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#fa8739"
          padding-bottom="0px"
          padding-top="0"
        >
          <MjmlColumn>
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4k.jpg"
              alt="Man 1"
              width="301px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="0px"
              padding-top="0"
            ></MjmlImage>
          </MjmlColumn>
          <MjmlColumn width="50%">
            <MjmlText
              align="left"
              color="#fff"
              font-size="13px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p style={{ fontSize: '19px' }}>ANDERSON SWEATER</p>
              <p style={{ fontSize: '36px' }}>75&#x20AC;</p>
              <p>
                The Anderson Sweater features a floral all-over print with
                contrast colour.
              </p>
            </MjmlText>
            <MjmlButton
              background-color="#fff"
              color="#fa8739"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#2f323b"
          padding-bottom="0px"
          padding-top="0"
        >
          <MjmlColumn>
            <MjmlText
              align="left"
              color="#fff"
              font-size="13px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p style={{ fontSize: '19px' }}>ALDER TWO JONES JACKET</p>
              <p style={{ fontSize: '36px' }}>100&#x20AC;</p>
              <p>
                Colour-block design, zip entry, oxford hood lining, side pockets
                &amp; TC lining.
              </p>
            </MjmlText>
            <MjmlButton
              background-color="#fa8739"
              color="#fff"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/xj6.jpg"
              alt="Man 2"
              align="center"
              border="none"
              width="302px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="0px"
              padding-top="0"
            ></MjmlImage>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#fa8739"
          padding-bottom="0px"
          padding-top="0"
        >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#fff"
              font-size="13px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="10px"
              padding-top="10px"
            >
              <p style={{ fontSize: '14px' }}>DISCOVER OUR</p>
              <p style={{ fontSize: '27px' }}>SUMMER COLLECTION</p>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#fff"
          padding-bottom="20px"
          padding-top="20px"
        >
          <MjmlColumn>
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4q.jpg"
              alt="Topaz C3 shoes"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            ></MjmlImage>
            <MjmlText
              align="center"
              color="#000"
              font-size="15px"
              font-weight="bold"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p>TOPAZ C3 SHOES</p>
              <p style={{ color: 'rgb(250, 135, 57)' }}>70&#x20AC;</p>
            </MjmlText>
            <MjmlButton
              background-color="#fa8739"
              color="#fff"
              font-size="13px"
              align="center"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4r.jpg"
              alt="Camden backpack"
              align="center"
              border="none"
              width="199px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            ></MjmlImage>
            <MjmlText
              align="center"
              color="#000"
              font-size="15px"
              font-weight="bold"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p>CAMDEN BACKPACK</p>
              <p style={{ color: 'rgb(250, 135, 57)' }}>50&#x20AC;</p>
            </MjmlText>
            <MjmlButton
              background-color="#fa8739"
              color="#fff"
              padding="15px 30px"
              border-radius="3px"
              href="https://mjml.io"
              padding-bottom="10px"
              padding-top="0"
            >
              BUY NOW
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#2f323b"
          padding-bottom="20px"
          padding-top="20px"
        >
          <MjmlColumn>
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x47.png"
              alt="Cards"
              width="72px"
            ></MjmlImage>
            <MjmlText
              align="center"
              color="#fff"
              font-size="13px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
                PAYMENT METHODS
              </p>
              <p>We accept all majors payments options</p>
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x48.png"
              alt="Currencies"
              align="center"
              border="none"
              width="70px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="10px"
            ></MjmlImage>
            <MjmlText
              align="center"
              color="#fff"
              font-size="13px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
                CURRENCIES CHOICE
              </p>
              <p>You have the choice to pay with your own currencies</p>
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x4y.png"
              alt="Express"
              align="center"
              border="none"
              width="82px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="8px"
              padding-top="10px"
            ></MjmlImage>
            <MjmlText
              align="center"
              color="#fff"
              font-size="13px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
                EXPRESS SHIPPING
              </p>
              <p>Delivered tomorrow before noon</p>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          background-color="#fa8739"
          padding-bottom="20px"
          padding-top="0"
        >
          <MjmlColumn>
            <MjmlImage
              src="http://191n.mj.am/img/191n/3s/x49.png"
              alt="Racoon logo"
              align="center"
              border="none"
              width="180px"
              padding-left="0px"
              padding-right="0px"
              padding-bottom="0px"
              padding-top="10px"
            ></MjmlImage>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#fff"
              font-size="13px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
            >
              <p>
                <a
                  href="https://mjml.io"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Privacy policy
                </a>
              </p>
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlSocial padding-top="20px">
              <MjmlSocialElement name="facebook" href="[[SHORT_PERMALINK]]">
                123
              </MjmlSocialElement>
              <MjmlSocialElement name="twitter" href="[[SHORT_PERMALINK]]">
                123
              </MjmlSocialElement>
              <MjmlSocialElement name="google" href="[[SHORT_PERMALINK]]">
                123
              </MjmlSocialElement>
            </MjmlSocial>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding-bottom="20px" padding-top="0px">
          123
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}
