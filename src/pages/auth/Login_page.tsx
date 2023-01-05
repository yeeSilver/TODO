import styled from "styled-components";
import Login_form from "../../components/auth/Login_form";
import bgImg from "../../assets/img/pinkBg.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #faf3f0;
`;

const Section = styled.div`
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
const LoginCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  width: 80%;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  font-family: "AbrilFatface";
  color: #4289cbf8;
  h2 {
    padding: 20px;
    font-size: 30px;
    font-weight: 600;
    color: #0081c9;
  }
`;
const Img = styled.div`
  height: 300px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export default function Login_page() {
  return (
    <Container>
      <Section>
        <Img>
          <img src={bgImg} />
        </Img>
        <LoginCon>
          <Text>
            <h2>LOG IN</h2>
            <p>Hello! Sign into Your account</p>
          </Text>
          <Login_form />
          <p style={{ color: "grey", fontSize: "8px", marginTop: "15px" }}>
            Don't have an account?
          </p>
          <p
            style={{
              color: "orange",
              fontSize: "12px",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
          >
            Create
          </p>
        </LoginCon>
      </Section>
    </Container>
  );
}
