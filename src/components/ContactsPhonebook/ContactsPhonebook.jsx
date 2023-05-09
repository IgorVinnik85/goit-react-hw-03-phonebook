import PropTypes from 'prop-types';
import css from './ContactsPhonebook.module.css';

export const ContactsPhonebook = ({ data, deleteContact }) => {
 
  return (
    <ul className={css.list}>
      {data.map(el => {
        return (
          <li className={css.item} key={el.id}>
            <span> {el.name}</span>
            <span> {el.number}</span>
            <button
              className={css.btn}
              type="button"
              onClick={() => deleteContact(el.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsPhonebook.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
  deleteContact: PropTypes.func.isRequired,
};
