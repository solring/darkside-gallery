import { Spinner } from 'react-bootstrap';

export default () => (
  <div className="container text-center py-5">
    <Spinner
      className="opacity-75"
      variant="light"
      animation="border"
      role="status">
      <span className="invisible">Loading...</span>
    </Spinner>
  </div>
)