import { Button, IconButton } from "../src";
import { Announcement } from "./announcement";

export default {
  title: "ButtonGroup",
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="space-y-4">

    <div>
      <Button.Group variant="solid" color="primary" className="space-x-2">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Button.Group>
    </div>

    <div>
      <Button.Group variant="solid" color="orange" className="space-x-2">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Button.Group>
    </div>

    <div>
      <Button.Group variant="solid" color="primary" className="space-x-2">
        <IconButton>
          <Announcement size={16} />
        </IconButton>

        <IconButton>
          <Announcement size={16} />
        </IconButton>

        <IconButton>
          <Announcement size={16} />
        </IconButton>

        <IconButton>
          <Announcement size={16} />
        </IconButton>
      </Button.Group>
    </div>
  </div>
);

export const attached = () => (
    <div className="space-y-4">
      <div>
        <Button.Group variant="solid" attached>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Button.Group>
      </div>
  
      <div>
        <Button.Group variant="solid" attached>
          <IconButton>
            <Announcement size={16} />
          </IconButton>
  
          <IconButton>
            <Announcement size={16} />
          </IconButton>
  
          <IconButton>
            <Announcement size={16} />
          </IconButton>
  
          <IconButton>
            <Announcement size={16} />
          </IconButton>
        </Button.Group>
      </div>
  
    </div>
  );
