import { useParams } from "react-router-dom";

export default function Profile() {
  const { username } = useParams();
  return <h1 style={{ padding: 40 }}>@{username}</h1>;
}