import Alert from 'react-s-alert';

const notice = (type, msg, title) => {
  const titleHTML = title ? `<h4><strong>${ title }</strong></h4>` : '';

  const bodyHTML = `
    ${ titleHTML }
    <div>
      <span class='fa fa-exclamation-triangle glyphicon glyphicon-alert'></span>&nbsp;
      <span>${ msg }</span>
    </div>
  `;

  Alert.error(bodyHTML, {
    position: 'top-right',
    timeout: 3000,
    html: true,
    effect: 'scale'
  });
};

export { notice };
