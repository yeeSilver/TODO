import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import bgImg from "../../assets/img/pinkBg.jpg";
import RegisterForm from "../../components/auth/Register_form";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #faf3f0;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
const CreateCon = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
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
  height: 500px;
  width: 400px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
`;

export default function RegisterPage() {
  const navigate = useNavigate();
  const onGoLoginPage = () => {
    navigate("/");
  };

  return (
    <div>
      <Container>
        <Section>
          <Img>
            <img src={bgImg} />
          </Img>
          <CreateCon>
            <Text>
              <h2>Create an Account</h2>
            </Text>
            <RegisterForm />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <span
                style={{
                  color: "grey",
                  fontSize: "8px",
                }}
              >
                Already have an account?
              </span>
              <span
                onClick={onGoLoginPage}
                style={{
                  color: "orange",
                  fontSize: "12px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                  margin: "10px",
                }}
              >
                Log in
              </span>
            </div>
          </CreateCon>
        </Section>
      </Container>
    </div>
  );
}
