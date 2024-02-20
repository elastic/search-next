'use client'
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiStat } from '@elastic/eui';

type StatPanelType = {
  title: string,
  description: string,
  half: boolean,
}

export const StatPanel = ({ title, description, half }: StatPanelType) => (
  <EuiFlexItem >
    <EuiPanel color="subdued">
      <EuiStat
        titleSize="m"
        title={title}
        description={description}
      />
    </EuiPanel>
  </EuiFlexItem >
);

// export const StatPanels = ({ pageData }) => {
//   return (
//     <EuiFlexGroup wrap>
//       {pageData.panels.map(item => (
//         <StatPanel description={item.title} title={item.value} half={item.id === "name" | item.id === "description"} />
//       ))}
//     </EuiFlexGroup>
//   )
// }
