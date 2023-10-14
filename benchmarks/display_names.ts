/*
 * @poppinss/intl-formatter
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// @ts-expect-error
import benchmark from 'benchmark'
import formatters from '../index.js'

const suite = new benchmark.Suite()

suite
  .add('DisplayNames@memoize', function () {
    formatters.displayNames('en-in', { type: 'language' }).of('en-in')
  })
  .add('DisplayNames', function () {
    new Intl.DisplayNames('en-in', { type: 'language' }).of('en-in')
  })
  .on('cycle', function (event: any) {
    console.log(String(event.target))
  })
  .on('complete', function (this: any) {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
