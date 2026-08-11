import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel } from "../components/Mylabel";


const meta = {
  title: 'UI/Label/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters:{
    layout: 'centered',
    
  },
  argTypes: {
    size: {
      control: 'select'
    },
    allCaps: {
      control: 'boolean'
    },
    color: {
      control: 'select'
    },
    fontColor: {
      control: 'color'
    }
  }
} satisfies Meta<typeof MyLabel>

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Basic label'
  }
}

export const AllCaps: Story = {
  args: {
    label: 'All Caps label',
    allCaps: true,
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary label',
    color: 'text-secondary',
  }
}

export const CustomColor: Story = {
  args: {
    label: 'Custom Color label',
    fontColor: 'green',
  }
}