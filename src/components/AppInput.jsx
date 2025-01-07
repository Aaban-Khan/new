// import styles from "/.AppInput.module.css";

function AppInput() {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-sm-6">
          <input type="input" placeholder="Enter Todo here" />
        </div>
        <div class="col-sm-4">
          <input type="date" />
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-success kg-btn">
            App
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppInput;
