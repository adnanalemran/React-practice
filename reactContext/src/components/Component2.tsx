interface User {
  name: string;
  age: number;
}

interface Component2Props {
  user: User;
}

const Component2: React.FC<Component2Props> = ({ user }) => {
  return (
    <div>
      <p>Name: {user.name}</p>

      <p>Age: {user.age}</p>
    </div>
  );
};

export default Component2;
