import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiStat } from '@elastic/eui';

export const StatPanel = ({ title, description }) => (
  <EuiFlexItem>
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
  console.log(pageData.panels);
  return (
    <EuiFlexGroup>
      {pageData.panels.map(item => (
        <StatPanel description={item.title} title={item.value} />
      ))}
    </EuiFlexGroup>
  )
}
