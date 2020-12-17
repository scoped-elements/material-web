#!/bin/bash

strings=(
    formfield
    icon-button-toggle
    icon-button
    list
    menu
    radio
    select
    slider
    snackbar
    switch
    tab-bar
    tab-indicator
    tab-scroller
    tab
    textarea
    textfield
    top-app-bar-fixed
    top-app-bar
    check-list-item
    list-item
    radio-list-item
    menu-surface
    button
    circular-progress-four-color
    circular-progress
    dialog
    drawer
    fab
    ripple
    notched-outline
    icon
)
camelCase=(
    Formfield
    IconButtonToggle
    IconButton
    List
    Menu
    Radio
    Select
    Slider
    Snackbar
    Switch
    TabBar
    TabIndicator
    TabScroller
    Tab
    TextArea
    TextField
    TopAppBarFixed
    TopAppBar
    CheckListItem
    ListItem
    RadioListItem
    MenuSurface
    Button
    CircularProgressFourColor
    CircularProgress
    Dialog
    Drawer
    Fab
    Ripple
    NotchedOutline
    Icon
)
for i in "${!strings[@]}"; do
    echo "
declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}
" >> src/mwc-${strings[$i]}.ts
done
