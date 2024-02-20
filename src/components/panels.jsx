'use client'
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiStat } from '@elastic/eui';

export const StatPanel = ({ title, description, half }) => (
  <EuiFlexItem style={half ? { minWidth: "50%" } : null} >
    <EuiPanel color="subdued">
      <EuiStat
        titleSize="m"
        title={title}
        description={description}
      />
    </EuiPanel>
  </EuiFlexItem>
);

export const StatPanels = ({ pageData }) => {
  return (
    <EuiFlexGroup wrap>
      {pageData.panels.map(item => (
        <StatPanel description={item.title} title={item.value} half={item.id === "name" | item.id === "description"} />
      ))}
    </EuiFlexGroup>
  )
}
