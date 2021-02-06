import Button from 'react-bootstrap/Button';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



const DevTooltipPosta = () => (
  <Tippy content="Ez a funkció jelenleg fejlesztés alatt áll" placement="right">
    <Button variant="primary">Csekk igényléses</Button>
  </Tippy>
);


export default DevTooltipPosta;