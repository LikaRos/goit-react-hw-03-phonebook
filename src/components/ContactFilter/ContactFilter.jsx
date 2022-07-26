import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';
export const ContactFilter = ({ filter, handlerFilter }) => {
  return (
    <>
      <form className={styles.form}>
        <h2>Contacts</h2>
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={filter}
            onChange={handlerFilter}
          />
        </label>
      </form>
    </>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerFilter: PropTypes.func.isRequired,
};
