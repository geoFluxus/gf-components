import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MailIcon, LocationIcon } from '../../../images/icons'
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Typography/Link",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    label: 'Monitor Circulaire Economie',
    href: 'https://www.monitorce.nl/'
  },
};

export const Icon: Story = {
  args: {
    label: 'info@geofluxus.com',
    href: 'mailto:info@geofluxus.com',
    icon: <LocationIcon />,
  },
};

export const IconWhiteText: Story = {
  args: {
    label: 'info@geofluxus.com',
    href: 'mailto:info@geofluxus.com',
    icon: <MailIcon />,
    type: 'light',
  },
};