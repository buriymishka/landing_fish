module.exports = {
  outputStyle: 'sass', /* less || scss || sass || styl */
  columns: 12, /* number of grid columns */
  offset: '30px', /* gutter width px || % || rem */
  mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
  container: {
      maxWidth: '1280px', /* max-width оn very large screen */
      fields: '30px' /* side fields */
  },
  breakPoints: {
      lg: {
          width: '1100px', /* -> @media (max-width: 1100px) */
          fields: '15px' /* set fields only if you want to change container.fields */
      },
      md: {
          width: '960px',
          fields: '15px' /* set fields only if you want to change container.fields */
      },
      sm: {
          width: '780px',
          fields: '15px' /* set fields only if you want to change container.fields */
      },
      xs: {
          width: '560px',
          fields: '15px' /* set fields only if you want to change container.fields */
      }
      /* 
      We can create any quantity of break points.

      some_name: {
          width: 'Npx',
          fields: 'N(px|%|rem)',
          offset: 'N(px|%|rem)'
      }
      */
  }
};