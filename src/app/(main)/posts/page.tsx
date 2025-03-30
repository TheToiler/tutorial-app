import PostsTable from "@/components/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/PostsPagination";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostsPage;
