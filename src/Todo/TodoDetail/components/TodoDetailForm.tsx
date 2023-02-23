import { useRecoilState, useSetRecoilState } from "recoil";
import { boxClicked, toDoState } from "../../atoms/recoil";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useDelTodo from "../../TodoList/hooks/useDelTodo";
import EditSvg from "../../../assets/svg/edit.svg";
import DelSvg from "../../../assets/svg/remove.svg";
import {
  Container,
  Content,
  CreateDate,
  DelBtn,
  DetailCon,
  DetailForm,
  DetailHeader,
  EditBtn,
  Title,
} from "./todoDetailForm.style";
import Signout from "../../../components/Signout";

export default function TodoDetailForm() {
  const todos = useRecoilState(toDoState);

  const id = todos[0][0].id;
  const { mutate } = useDelTodo();
  const navigate = useNavigate();
  const setisClicked = useSetRecoilState<boolean>(boxClicked);

  const onDelClicked = () => {
    // eslint-disable-next-line no-restricted-globals
    const res = confirm("Are you sure to delete this task?");
    // const res = confirm("해당 항목을 정말 삭제하시겠습니까?");
    if (res) {
      onDelete();
      setisClicked(false);
      navigate("/", { replace: true });
    }
  };

  const onDelete = () => {
    mutate(id);
  };

  return (
    <>
      {todos[0][0].updatedAt === undefined ? (
        <div> Loading... </div>
      ) : (
        <Container>
          <DetailCon>
            <DetailHeader>
              <DelBtn onClick={onDelClicked}>
                <img src={DelSvg} alt="delete button" />
              </DelBtn>
              <CreateDate>
                {todos[0][0].updatedAt.slice(0, 10)
                  ? todos[0][0].updatedAt.slice(0, 10)
                  : "입력해주세요"}
              </CreateDate>
              <Link to={`${todos[0][0].id}`}>
                <EditBtn>
                  <img src={EditSvg} alt="edit button" />
                </EditBtn>
              </Link>
            </DetailHeader>
            <DetailForm>
              <Title>
                {todos[0][0].title ? todos[0][0].title : "입력해주세요"}
              </Title>
              <Content>
                {todos[0][0].content ? todos[0][0].content : "입력해주세요"}
              </Content>
            </DetailForm>
          </DetailCon>
          {/* <TodoUpdateForm /> */}
          <Outlet />
        </Container>
      )}
    </>
  );
}
