import Button from 'react-bootstrap/Button';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



const DevTooltipPayPal = () => (
  <Tippy content="Ez a funkció jelenleg fejlesztés alatt áll" placement="right">
    <Button variant="primary">PayPal-os támogatás</Button>
  </Tippy>
);


export default DevTooltipPayPal;