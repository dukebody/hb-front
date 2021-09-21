//FEED SECTION - HERE COMME ALL THE NOTIFFICATIONS, MESSAGES and CONVERSATION LINKS FROM EXTERNAL RESOURCES
import Dropdown from '../../elements/Dropdown'

export default function Feed() {
  return (
    <div class="feed-container">

      <div class="feed-selector">

          <Dropdown />

      </div>

      <div class="feed-line"></div>

      <div class="feed-section">

        <div class="feed-element">

          <CardChat />

        </div>

        <div class="feed-element">

          <CardChat />

        </div>

      </div>

    </div>
  );
}