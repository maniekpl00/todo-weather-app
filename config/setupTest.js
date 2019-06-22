const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });
