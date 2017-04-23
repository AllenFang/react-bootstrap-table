import Alert from 'react-s-alert';

const notice = (type, msg, title) => {
  const titleHTML = title ? `<h4><strong>${ title }</strong></h4>` : '';

  const bodyHTML = `
    ${ titleHTML }
    <span>${ msg }</span>
  `;

  Alert.error(bodyHTML, {
    position: 'top-right',
    timeout: 3500,
    html: true
  });
};

export { notice };
