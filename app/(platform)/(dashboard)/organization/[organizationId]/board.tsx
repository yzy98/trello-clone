import FormDeleteButton from "./form-delete";

import { deleteBoard } from "@/actions/delete-board";

interface BoardProps {
  id: string;
  title: string;
}

const Board = ({ id, title }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <FormDeleteButton />
    </form>
  );
};

export default Board;
