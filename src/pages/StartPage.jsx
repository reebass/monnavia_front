import { DoubleRightOutlined, LoginOutlined } from '@ant-design/icons';
import { Button, Flex, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

const FlexStyled = styled(Flex)`
  background-color: black;
`;

const Advantages = styled.div`
  height: 100vh;
`;

export const StartPage = () => {
  const scrollSetting = {
    smooth: true,
    duration: 1900,
    hashSpy: true,
    spyThrottle: 500,
  };

  return (
    <>
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FFF',
          }}
        >
          <LoginOutlined />
          <Menu
            mode="horizontal"
            style={{ flex: 1, minWidth: 0 }}
            items={[
              { label: 'Home', key: 'home' },
              { label: 'Study', key: 'study' },
            ]}
          ></Menu>
        </Header>
        <Content>
          <FlexStyled
            style={{ width: '100%', height: 'calc(100vh - 64px)' }}
            justify="center"
            align="center"
            gap="middle"
          >
            <Button size="lagre" type="primary">
              BUY
            </Button>
            <Button size="lagre" type="primary">
              STUDY
            </Button>
          </FlexStyled>
          <Button
            style={{
              position: 'relative',
              bottom: 150,
              left: '50%',
              transform: 'translate(-50%)',
            }}
            icon={
              <DoubleRightOutlined
                rotate={90}
                style={{ fontSize: 70, marginInlineEnd: 0 }}
              />
            }
            size="lagre"
            type="link"
            onClick={() => scroll.scrollMore(1000, scrollSetting)}
          />

          <Advantages name="section1">
            <Title>ПРЕИМУЩЕСТВА</Title>
          </Advantages>
        </Content>
      </Layout>
    </>
  );
};
