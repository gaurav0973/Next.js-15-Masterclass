interface UserPageParams {
  params: {
    id: number;
  };
}
async function UserPage(params: UserPageParams) {
  const { id } = await params.params;
  console.log("UserId : ", id);
  return <div>This is user with userID = {id}</div>;
}
export default UserPage;
