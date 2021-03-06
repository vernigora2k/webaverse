import { React } from 'https://unpkg.com/es-react@16.13.1/dev';
import htm from '/web_modules/htm.js';
import CreatorCard from './CreatorCard.js'
import csz from '../web_modules/csz.js'

const styles = csz`/components/CreatorCardGrid.css`

const html = htm.bind(React.createElement)

const CreatorCardGrid = ({
  creatorData
}) => {
    return html`
        <div className="${styles} creatorGrid">
        ${creatorData.map(creator => html`
          <${CreatorCard}
              key="${creator.address}"
              name="${creator.name}"
              ftu="${creator.ftu}"
              avatarPreview="${creator.avatarPreview}"
              avatarFileName="${creator.avatarFileName}"
              avatarUrl="${creator.avatarUrl}"
              address="${creator.address}"
          />
          `)}
      </div>
    `;
  };

  export default CreatorCardGrid;
