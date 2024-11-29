export const navItems = [
  {
    name: "Dashboard",
    icon: "/icons/dashboard.svg",
    url: "/",
  },
  {
    name: "Documents",
    icon: "/icons/documents.svg",
    url: "/documents",
  },
  {
    name: "Images",
    icon: "/icons/images.svg",
    url: "/images",
  },
  {
    name: "Media",
    icon: "/icons/video.svg",
    url: "/media",
  },
  {
    name: "Others",
    icon: "/icons/others.svg",
    url: "/others",
  },
];

export const actionsDropdownItems = [
  {
    label: "Rename",
    icon: "/icons/edit.svg",
    value: "rename",
  },
  {
    label: "Details",
    icon: "/icons/info.svg",
    value: "details",
  },
  {
    label: "Share",
    icon: "/icons/share.svg",
    value: "share",
  },
  {
    label: "Download",
    icon: "/icons/download.svg",
    value: "download",
  },
  {
    label: "Delete",
    icon: "/icons/delete.svg",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];

export const avatarPlaceholderUrl =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
