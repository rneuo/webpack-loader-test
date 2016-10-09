import _ from 'lodash'
import $ from 'jquery'
import partial from 'views/_partial.html'
import 'stylesheets/app.scss'

var compiled = _.template(partial)
$('#content').html(compiled({ content: 'center' }))
