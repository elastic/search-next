'use client'
//
import React, { useState } from "react";
//
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiIcon,
  EuiTitle,
  EuiSpacer,
  EuiCallOut,
  EuiLink,
  EuiText,
  EuiButton,
  EuiComboBox,
  EuiFormRow,
  EuiSelect,
  useGeneratedHtmlId,
  EuiFieldText,
  EuiButtonEmpty
} from "@elastic/eui";

import { CONNECTOR_ICONS } from '@/lib/connector_icons';
// import { DATA } from "./data";

export default function Configuration() {
  const optionsStatic = [
    {
      label: "index-1",
    },
    {
      label: "index-2",
    },
    {
      label: "index-3",
    },
  ];

  const optionsLanguageAnalyzer = [
    { value: "Universal", text: "Universal" },
    { value: "option_two", text: "Option two" },
    { value: "option_three", text: "Option three" },
  ];

  const [options, setOptions] = useState(optionsStatic);
  const [selectedOptions, setSelected] = useState([]);

  const [value, setValue] = useState(options[1].value);

  const basicSelectId = useGeneratedHtmlId({ prefix: "basicSelect" });

  const onChangeLanguageAnalyzer = (e) => {
    setValue(e.target.value);
  };

  const onChange = (selectedOptions) => {
    setSelected(selectedOptions);
  };

  const onCreateOption = (searchValue, flattenedOptions = []) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Create the option if it doesn't exist.
    if (
      flattenedOptions.findIndex(
        (option) => option.label.trim().toLowerCase() === normalizedSearchValue
      ) === -1
    ) {
      setOptions([...options, newOption]);
    }

    // Select the option.
    setSelected([...selectedOptions, newOption]);
  };

  return (
    <>
      <EuiFlexGroup>
        {/* Main content */}
        <EuiFlexItem grow={2}>
          <EuiPanel hasShadow={false} hasBorder>
            <EuiFlexGroup gutterSize="m" direction="row" alignItems="center">
              <EuiFlexItem grow={false}>
                <EuiIcon size="xl" type={CONNECTOR_ICONS.azure_blob_storage} />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiTitle size="s">
                  <h2>Azure Blob Job</h2>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiCallOut
              color="warning"
              size="m"
              title="No running Enterprise Search instance detected"
              iconType="warning"
            >
              <p>
                Native connectors require a running Enterprise Search instance
                to sync content from source
              </p>
            </EuiCallOut>
            <EuiSpacer />
            <EuiPanel hasShadow={false} hasBorder>
              <EuiCallOut
                color="primary"
                size="m"
                title="Research configuration requirements"
                iconType="iInCircle"
              >
                <p>
                  This connector supports several authentication methods. Ask
                  your administrator for the correct connection credentials
                </p>
                <EuiLink href="#" target="_blank">
                  Document
                </EuiLink>
                <EuiLink href="#" target="_blank">
                  Azure Blob Storage documentation
                </EuiLink>
              </EuiCallOut>
              <EuiSpacer />
              <EuiTitle size="s">
                <h3>Credentials</h3>
              </EuiTitle>
              <EuiSpacer />
              <EuiFormRow
                label="Account name"
                hasChildLabel={false}
                helpText=""
              >
                <EuiFieldText
                  placeholder=""
                  value={""}
                  // onChange={(e) => onChange(e)}
                  aria-label="Use aria labels when no actual label is in use"
                />
              </EuiFormRow>
              <EuiSpacer />
              <EuiFormRow label="Account key" hasChildLabel={false} helpText="">
                <EuiFieldText
                  placeholder=""
                  value={""}
                  // onChange={(e) => onChange(e)}
                  aria-label="Use aria labels when no actual label is in use"
                />
              </EuiFormRow>
              <EuiSpacer />
              <EuiFormRow
                label="Blobl endpoint"
                hasChildLabel={false}
                helpText=""
              >
                <EuiFieldText
                  placeholder="http://127.0.0.1:100000/devstoreaccount"
                  value={""}
                  // onChange={(e) => onChange(e)}
                  aria-label="Use aria labels when no actual label is in use"
                />
              </EuiFormRow>
              <EuiSpacer />
              <EuiFlexGroup gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiButton >Save configuration</EuiButton>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty>Cancel</EuiButtonEmpty>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
            <EuiSpacer />
            <EuiPanel hasShadow={false} hasBorder>
              <EuiTitle size="s">
                <h3>Attach an index</h3>
              </EuiTitle>
              <EuiSpacer />
              <EuiText size="s">
                <p>
                  This index will hold your data source content, and is
                  optimized with default field mappings for relevant search
                  experiences. Give your index a unique name and optionally set
                  a default{" "}
                  <EuiLink href="#" target="_blank">
                    language analyzer
                  </EuiLink>
                  for the index.
                </p>
              </EuiText>
              <EuiSpacer />
              <EuiLink href="#" target="_blank">
                Learn more about indieces
              </EuiLink>
              <EuiSpacer />
              <EuiFlexGroup gutterSize="s">
                <EuiFlexItem>
                  <EuiFormRow
                    label="Associate index"
                    hasChildLabel={false}
                    helpText="You can use another existing index or create a new one"
                  >
                    <EuiComboBox
                      aria-label="Accessible screen reader label"
                      placeholder="Select or create an index"
                      options={options}
                      selectedOptions={selectedOptions}
                      onChange={onChange}
                      onCreateOption={onCreateOption}
                      isClearable={true}
                      data-test-subj="demoComboBox"
                      label="Index"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow
                    label="Language analyzer"
                    hasChildLabel={false}
                    helpText="Language can be changed later, but may require a reindex"
                  >
                    <EuiSelect
                      id={basicSelectId}
                      options={optionsLanguageAnalyzer}
                      value={value}
                      onChange={(e) => onChangeLanguageAnalyzer(e)}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer />
              <EuiFlexGroup gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiButton fill>Create and attach name connector</EuiButton>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiButton>Save configuration</EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiPanel>
        </EuiFlexItem>
        {/* Side content */}
        <EuiFlexItem grow={1}>
          <EuiFlexGroup direction="column">
            <EuiFlexItem grow={false}>
              <EuiPanel hasBorder hasShadow={false}>
                <EuiFlexGroup
                  direction="row"
                  alignItems="center"
                  gutterSize="s"
                >
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="clock" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiTitle size="xs">
                      <h3>Configurable sync schedule</h3>
                    </EuiTitle>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer size="s" />
                <EuiText size="s">
                  Remember to set a sync schedule in the Scheduling tab to
                  continually refresh your searchable data
                </EuiText>
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiPanel hasBorder hasShadow={false}>
                <EuiFlexGroup
                  direction="row"
                  alignItems="center"
                  gutterSize="s"
                >
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="globe" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiTitle size="xs">
                      <h3>Document level security</h3>
                    </EuiTitle>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer size="s" />
                <EuiText size="s">
                  Restrict and personalize the read access users have to the
                  index documents at query time
                  <EuiSpacer size="s" />
                  <EuiLink href="#" target="_blank">
                    Document level security
                  </EuiLink>
                </EuiText>
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiPanel hasBorder hasShadow={false}>
                <EuiFlexGroup
                  direction="row"
                  alignItems="center"
                  gutterSize="s"
                >
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="wrench" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiTitle size="xs">
                      <h3>Self-manage this connector</h3>
                    </EuiTitle>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer size="s" />
                <EuiText size="s">
                  Want to self-host this native connector? Convert it to a{" "}
                  <EuiLink href="#" target="_blank">
                    connector client
                  </EuiLink>
                  , to be self-managed on your own infrastructure. You ll need
                  to convert this connector if you want to customize the code
                  using our Python framework
                  <EuiSpacer size="s" />
                  <EuiButton onClick={() => console.log("Convert")}>
                    Convert connector
                  </EuiButton>
                </EuiText>
              </EuiPanel>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiPanel hasBorder hasShadow={false}>
                <EuiCallOut
                  color="warning"
                  iconType="beaker"
                  title="Beta feature"
                >
                  This connector is in beta. Beta features are subject to change
                  and are not covered by the support SLA of general release (GA)
                  features. Elastic plans to promote this feature to GA in a
                  future release
                </EuiCallOut>
              </EuiPanel>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};


