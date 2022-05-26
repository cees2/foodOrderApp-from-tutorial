import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const isNotEmpty = value => value.trim().length > 0;
const hasFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
  const {
    inputRef: nameInputRef,
    isValid: nameIsValid,
    inputClass: nameInputClass,
    setEnteredValue: setNameEnteredValue,
  } = useInput(isNotEmpty);
  const {
    inputRef: streetInputRef,
    isValid: streetIsValid,
    inputClass: streetInputClass,
    setEnteredValue: setStreetEnteredValue,
  } = useInput(isNotEmpty);
  const {
    inputRef: postalCodeInputRef,
    isValid: postalCodeIsValid,
    inputClass: postalCodeInputClass,
    setEnteredValue: setPostalCodeEnteredValue,
  } = useInput(hasFiveChars);
  const {
    inputRef: cityInputRef,
    isValid: cityIsValid,
    inputClass: cityInputClass,
    setEnteredValue: setCityEnteredValue,
  } = useInput(isNotEmpty);

  const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    setNameEnteredValue(nameInputRef.current.value);
    setStreetEnteredValue(streetInputRef.current.value);
    setPostalCodeEnteredValue(postalCodeInputRef.current.value);
    setCityEnteredValue(cityInputRef.current.value);
  }

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={streetInputClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={postalCodeInputClass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={cityInputClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;