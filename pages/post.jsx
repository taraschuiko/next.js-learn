import { withRouter } from "next/router";
import Layout from "../components/Layout";

export default withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>Post content</p>
  </Layout>
));
