import PropTypes from 'prop-types'

export const FindContacts = ({ value, onInput }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Enter find name"
        value={value}
        onChange={onInput}
      />
    </div>
  );
};

FindContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};