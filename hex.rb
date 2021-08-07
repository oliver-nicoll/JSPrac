require "minitest/autorun"

class Hex
  attr_reader :r, :g, :b

  def initialize(r, g, b)
    @r = r
    @g = g
    @b = b
  end

  def to_s
    [
      "#",
      to_hex(r),
      to_hex(g),
      to_hex(b)
    ].join()
  end

  private

  def to_hex(value)
    value.to_s(16).rjust(2, "0").upcase
  end
end

# Don't edit below this, make them pass!

describe Hex do
  it { _(Hex.new(255, 99, 71).to_s).must_equal "#FF6347" }
  it { _(Hex.new(184, 134, 11).to_s).must_equal "#B8860B" }
  it { _(Hex.new(189, 183, 107).to_s).must_equal "#BDB76B" }
  it { _(Hex.new(0, 0, 205).to_s).must_equal "#0000CD" }
  it { _(Hex.new(8, 0, 205).to_s).must_equal "#0800CD" }
end
