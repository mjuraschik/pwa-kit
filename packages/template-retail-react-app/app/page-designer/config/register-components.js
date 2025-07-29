import {PD} from '@salesforce/page-designer-react-sdk/core/registry';
import heroSmart from '../../components/heroSmart';
import searchResults from '../../components/searchResults';
import section from '../../components/section';
import tile from '../../components/tile';
import grid from '../../components/grid'


export function registerDesignComponents() {
    PD.registerComponent('simpleGrid', grid);
    PD.registerComponent('heroSmart', heroSmart);
    PD.registerComponent('searchResults', searchResults);
    PD.registerComponent('section', section);
    PD.registerComponent('tile', tile);
}
