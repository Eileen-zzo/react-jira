import _ from "lodash";

interface user {
  id: string;
  name: string;
}
interface item {
  name: string;
  personId: string;
}
interface ListProps {
  list: item[];
  users: user[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>
                {(_.find(users, (e) => e.id === item.personId) || {}).name}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
