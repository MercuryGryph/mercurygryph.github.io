package cn.mercury9.website

import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.window.ComposeViewport
import kotlinx.browser.document
import kotlinx.dom.clear

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
  document.body!!.clear()
  ComposeViewport(document.body!!) {
    App()
  }
}
