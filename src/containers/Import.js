// fill out this container
import { connect } from "react-redux";
import Import from "../components/Import";
import state from "../redux/state";
import { fetchMakes, deleteMake } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    makes: state.makes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
    deleteMake: (makeId) => dispatch(deleteMake(makeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);
