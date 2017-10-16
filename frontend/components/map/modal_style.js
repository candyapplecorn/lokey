const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.5)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    width           : '300px',
    height          : 'auto',
    left            : '40%',
    border          : '1px solid #ccc',
    overflow        : 'none',
    zIndex          : 11,
    backgroundColor : 'rgba(68, 68, 68, 0.7)',
    display         : 'flex',
    flexDirection   : 'column',
    color           : 'white',
    alignItems      : 'center',
    justifyContent  : 'center',
    lineHeight      : '30px'

  }
};

export default modalStyle;
